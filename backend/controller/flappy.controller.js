// const Created = require('../models/flappy.models');

// exports.createMessage = async (req, res) => {
//     try {
//         const { name, score} = req.body;
//         const created = new Created({ name, score });
//         await created.save();
//         res.status(201).json({ message: 'Message created successfully', created });
//     } catch (error) {
//         console.error('Error creating Message:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// exports.getFlappy = async (req, res) => {
//   try {
//       const message = await Message.find();
//       res.status(200).json(message);
//   } catch (error) {
//       console.error('Error fetching message:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// };
