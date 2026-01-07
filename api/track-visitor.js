// Vercel Serverless Function to track visitors in Notion
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Helper function to detect device type
function detectDevice(userAgent = '') {
  const ua = userAgent.toLowerCase();
  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    return 'Mobile';
  } else if (ua.includes('tablet') || ua.includes('ipad')) {
    return 'Tablet';
  }
  return 'Desktop';
}

// Helper function to detect browser
function detectBrowser(userAgent = '') {
  const ua = userAgent.toLowerCase();
  if (ua.includes('edg/')) return 'Edge';
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari';
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('opera') || ua.includes('opr/')) return 'Opera';
  return 'Other';
}

// Helper function to categorize referrer
function categorizeReferrer(referrer = '') {
  if (!referrer || referrer === 'Direct') return 'Direct';

  const ref = referrer.toLowerCase();
  if (ref.includes('google')) return 'Google';
  if (ref.includes('facebook') || ref.includes('fb.')) return 'Facebook';
  if (ref.includes('instagram')) return 'Instagram';
  if (ref.includes('twitter') || ref.includes('t.co')) return 'Twitter';
  if (ref.includes('linkedin')) return 'LinkedIn';
  if (ref.includes('youtube')) return 'YouTube';
  if (ref.includes('whatsapp')) return 'WhatsApp';
  if (ref.includes('kakao')) return 'KakaoTalk';

  return 'Other';
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      timestamp,
      page_url,
      referrer,
      user_agent,
      screen_resolution,
      language,
      timezone,
      session_duration,
      country,
      device,
      browser,
      actions,
    } = req.body;

    // Generate a unique visitor ID
    const visitorId = `V-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Detect device type from user agent
    const deviceType = device || detectDevice(user_agent);

    // Detect browser from user agent
    const browserType = browser || detectBrowser(user_agent);

    // Create a new page in the Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        '방문자 ID': {
          title: [
            {
              text: {
                content: visitorId,
              },
            },
          ],
        },
        '방문 일시': {
          date: {
            start: timestamp || new Date().toISOString(),
          },
        },
        '페이지 URL': {
          rich_text: [
            {
              text: {
                content: page_url || window.location.href,
              },
            },
          ],
        },
        '유입 경로': {
          select: {
            name: categorizeReferrer(referrer),
          },
        },
        '디바이스': {
          select: {
            name: deviceType,
          },
        },
        '브라우저': {
          select: {
            name: browserType,
          },
        },
        '국가': {
          select: {
            name: country || timezone.split('/')[0] || 'Unknown',
          },
        },
        '체류 시간(초)': {
          number: session_duration || 0,
        },
        '행동': {
          multi_select: actions || [],
        },
        '메모': {
          rich_text: [
            {
              text: {
                content: `해상도: ${screen_resolution}, 언어: ${language}, 시간대: ${timezone}, User Agent: ${user_agent?.substring(0, 100)}`,
              },
            },
          ],
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Visitor tracked successfully',
      id: response.id,
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
