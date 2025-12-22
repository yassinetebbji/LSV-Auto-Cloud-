const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

const cleanField = (value, maxLen) => {
    if (!value) return '';
    return String(value).replace(/\r\n/g, '\n').trim().slice(0, maxLen);
};

app.post('/api/contact', async (req, res) => {
    const name = cleanField(req.body.name, 120);
    const email = cleanField(req.body.email, 180);
    const business = cleanField(req.body.business, 180);
    const size = cleanField(req.body.size, 40);
    const message = cleanField(req.body.message, 2000);

    if (!name || !email || !business || !size || !message) {
        return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    const toAddress = process.env.CONTACT_RECIPIENT || process.env.GMAIL_USER;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !toAddress) {
        return res.status(500).json({ ok: false, error: 'Email service not configured' });
    }

    try {
        await transporter.sendMail({
            from: `"LSV Auto Cloud Contact" <${process.env.GMAIL_USER}>`,
            to: toAddress,
            replyTo: email,
            subject: `New contact form message from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Business: ${business}`,
                `Team size: ${size}`,
                '',
                'Message:',
                message,
            ].join('\n'),
        });

        return res.json({ ok: true });
    } catch (error) {
        console.error('Email send failed', error);
        return res.status(500).json({ ok: false, error: 'Email send failed' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
