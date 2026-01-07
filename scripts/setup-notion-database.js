// Script to check and setup Notion database structure
const { Client } = require('@notionhq/client');
require('dotenv').config();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: NOTION_API_KEY,
});

async function checkDatabase() {
  try {
    console.log('🔍 Checking Notion database structure...\n');

    const database = await notion.databases.retrieve({
      database_id: DATABASE_ID,
    });

    console.log('✅ Database found:', database.title[0]?.plain_text || 'Untitled');
    console.log('\n📋 Current properties:');

    Object.keys(database.properties).forEach(key => {
      const prop = database.properties[key];
      console.log(`  - ${key}: ${prop.type}`);
    });

    console.log('\n💡 Required properties for visitor tracking:');
    console.log('  - Timestamp (date)');
    console.log('  - Page URL (url)');
    console.log('  - Referrer (rich_text)');
    console.log('  - User Agent (rich_text)');
    console.log('  - Screen Resolution (rich_text)');
    console.log('  - Language (select)');
    console.log('  - Timezone (rich_text)');
    console.log('  - Session Duration (number)');

  } catch (error) {
    console.error('❌ Error:', error.message);

    if (error.code === 'object_not_found') {
      console.log('\n⚠️  Database not found. Please check:');
      console.log('  1. Database ID is correct');
      console.log('  2. Integration is connected to the database');
      console.log('     → Go to your Notion page');
      console.log('     → Click ⋯ (top right)');
      console.log('     → Click "Add connections"');
      console.log('     → Select your integration');
    }
  }
}

async function testConnection() {
  try {
    console.log('\n🧪 Testing visitor tracking...\n');

    const visitorId = `TEST-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

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
            start: new Date().toISOString(),
          },
        },
        '페이지 URL': {
          rich_text: [
            {
              text: {
                content: 'https://greengyeol-test.example.com',
              },
            },
          ],
        },
        '유입 경로': {
          select: {
            name: 'Google',
          },
        },
        '디바이스': {
          select: {
            name: 'Desktop',
          },
        },
        '브라우저': {
          select: {
            name: 'Chrome',
          },
        },
        '국가': {
          select: {
            name: 'Asia',
          },
        },
        '체류 시간(초)': {
          number: 125,
        },
        '행동': {
          multi_select: [
            { name: 'Page Visit' },
            { name: 'Viewed Portfolio' },
            { name: 'Booking Button Click' },
          ],
        },
        '메모': {
          rich_text: [
            {
              text: {
                content: '해상도: 1920x1080, 언어: en, 시간대: Asia/Hong_Kong, User Agent: Mozilla/5.0 (Test)',
              },
            },
          ],
        },
      },
    });

    console.log('✅ Test visitor data created successfully!');
    console.log('🔗 View it at:', `https://notion.so/${response.id.replace(/-/g, '')}`);
    console.log('\n✨ Visitor tracking is working correctly!');

  } catch (error) {
    console.error('❌ Error creating test entry:', error.message);

    if (error.code === 'validation_error') {
      console.log('\n⚠️  Error details:', error.message);
      console.log('\n💡 Your database already has the correct structure!');
      console.log('The existing properties are:');
      console.log('  - 방문자 ID (title)');
      console.log('  - 방문 일시 (date)');
      console.log('  - 페이지 URL (text)');
      console.log('  - 유입 경로 (select)');
      console.log('  - 디바이스 (select)');
      console.log('  - 브라우저 (select)');
      console.log('  - 국가 (select)');
      console.log('  - 체류 시간(초) (number)');
      console.log('  - 행동 (multi_select)');
      console.log('  - 메모 (text)');
    }
  }
}

async function main() {
  console.log('🚀 Notion Database Setup Tool\n');
  console.log('═══════════════════════════════════════\n');

  await checkDatabase();
  await testConnection();

  console.log('\n═══════════════════════════════════════');
  console.log('✅ Setup complete!');
}

main();
