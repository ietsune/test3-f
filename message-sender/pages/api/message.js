// /pages/api/message.js
import axios from 'axios';

const RPI_SERVER_URL = "http://10.124.57.76:5001/receive_message";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { inputText } = req.body;
        const modifiedMessage = inputText + 'だみょ～ん';

        try {
            const response = await axios.post(RPI_SERVER_URL, { message: modifiedMessage });
            if (response.status === 200) {
                res.status(200).json({ status: 'success', message: 'Message sent to Raspberry Pi' });
            } else {
                res.status(500).json({ status: 'error', message: 'Failed to send message to Raspberry Pi' });
            }
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
