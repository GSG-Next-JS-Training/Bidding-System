export const getEmailHtml = (html: string) =>
  `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
  <p style="font-size: 16px; color: #555;">Hello,</p>
  <p style="font-size: 16px; color: #555;">You recently requested to reset your password. Use the code below to proceed:</p>
  
  <div style="text-align: center; margin: 20px 0;">
    <span style="background-color: #007bff; color: white; padding: 10px 20px; font-size: 24px; font-weight: bold; border-radius: 5px; display: inline-block;">
      ${html}
    </span>
  </div>
  
  <p style="font-size: 16px; color: #555;">If you did not request a password reset, please ignore this email.</p>
  <p style="font-size: 16px; color: #555;">Thank you,</p>
  <p style="font-size: 16px; font-weight: bold; color: #333;">Bidding System Team</p>
</div>`;
