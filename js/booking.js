/* ------------------------------------------
   TELEGRAM BOOKING FORM HANDLER
------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".booking-form");

    // Your Telegram Bot Token + Chat ID
    const BOT_TOKEN = "8064414899:AAHLtSeEtINH3ZBaNubDC_FCsqbarEpc5CI";
    const CHAT_ID =  "6048439667";
    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // stop page refresh

        // Collect Form Data
        const data = new FormData(form);

        // Format the message text
        const message = `
🚗 *NEW SHUTTLE BOOKING*  
------------------------------  
👤 *Name:* ${data.get("name")}
📧 *Email:* ${data.get("email")}
📞 *Phone:* ${data.get("phone")}

📅 *Date:* ${data.get("date")}
⏰ *Time:* ${data.get("hour")}:${data.get("minute")} ${data.get("ampm")}

✈️ *Airline:* ${data.get("airline")}

📍 *Pickup Address:*  
${data.get("pickup-street")}
${data.get("pickup-line2")}
${data.get("pickup-city")}, ${data.get("pickup-state")} ${data.get("pickup-zip")}

🏁 *Destination Address:*  
${data.get("dest-street")}
${data.get("dest-line2")}
${data.get("dest-city")}, ${data.get("dest-state")} ${data.get("dest-zip")}

👥 *Passengers:* ${data.get("passengers")}

📝 *Special Requests:*  
${data.get("special-requests")}

💬 *Message:*  
${data.get("message")}
------------------------------
        `;

        // Send message to Telegram
        try {
            await fetch(TELEGRAM_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "Markdown"
                })
            });

            // Success message
            alert("🎉 Your booking request has been sent successfully! We will contact you via Email very soon checkout!!!");
            form.reset();

        } catch (error) {
            console.error("Telegram Error:", error);
            alert("❌ Failed to send booking. Please try again.");
        }
    });
});
