const Data = require('../models/Data');

let addCount = 0;
let updateCount = 0;
exports.getAllData = async (req, res) => {
  try {
    // Retrieve all data from the database
    const allData = await Data.find({});
    
    // Send the data as a JSON response
    res.json(allData);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: 'Failed to get data', error: error.message });
  }
};

exports.addData = async (req, res) => {
  try {
    const { name, age } = req.body;
    
    // Basic validation: Check if required fields are present
    if (!name || !age) {
      return res.status(400).json({ message: 'name and age are required' });
    }
 // Increment the addCount
 addCount++;
    const newData = new Data({ name, age });
    await newData.save();
    res.status(201).json({ message: 'Data added successfully' });
    console.log("Data Added")
  } catch (error) {
    res.status(500).json({ message: 'Failed to add data', error: error.message });
  }
};

exports.editData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    
    // Basic validation: Check if required fields are present
    if (!name || !age) {
      return res.status(400).json({ message: 'name and age are required' });
    }
    // Increment the updateCount
    updateCount++;
    await Data.findByIdAndUpdate(id, { name, age });
    res.json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to edit data', error: error.message });
  }
};
exports.getCount = async (req, res) => {
  try {
    res.json({ addCount, updateCount });

    
  } catch (error) {
    res.status(500).json({ message: 'Failed to get count', error: error.message });
  }
};