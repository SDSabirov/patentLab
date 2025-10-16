export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const {
    name,
    role,
    otherRole,
    brandName,
    hasLogo,
    industry,
    selectedServices,
    otherService,
    preferredTime,
    phone
  } = body

  // Translation mappings for Russian
  const roleTranslations = {
    owner: 'Владелец компании',
    marketer: 'Специалист по цифровому маркетингу',
    starter: 'Человек, запускающий новый проект',
    other: otherRole
  }

  const serviceTranslations = {
    registration: 'Юридическая помощь при регистрации бренда',
    protection: 'Защита существующего бренда',
    recovery: 'Юридическая помощь по возврату бренда',
    branding: 'Брендинг и дизайн',
    other: otherService
  }

  const timeTranslations = {
    morning: 'Утро (09:00–12:00)',
    afternoon: 'После обеда (12:00–17:00)',
    evening: 'Вечером (17:00–20:00)'
  }

  // Format services list
  const formattedServices = selectedServices
    .map(s => serviceTranslations[s] || s)
    .join('\n• ')

  // Format the message for Telegram
  const message = `
🔔 *Новая заявка с сайта PatentLab*

👤 *Имя:* ${name}

💼 *Роль:* ${roleTranslations[role] || role}

🏢 *Название бренда:* ${brandName}

🎨 *Есть логотип:* ${hasLogo === 'yes' ? 'Да' : 'Нет'}

🏭 *Сфера деятельности:* ${industry}

📋 *Интересующие услуги:*
• ${formattedServices}

⏰ *Удобное время связи:* ${timeTranslations[preferredTime] || preferredTime}

📞 *Телефон:* ${phone}

⏱ *Время заявки:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
  `.trim()

  try {
    // Send message to Telegram
    const telegramResponse = await $fetch(
      `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        body: {
          chat_id: config.telegramChatId,
          text: message,
          parse_mode: 'Markdown'
        }
      }
    )

    return {
      success: true,
      message: 'Form submitted successfully'
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send form data'
    })
  }
})
