const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dns = require('dns');
require('dotenv').config();

dns.setServers(['8.8.8.8', '1.1.1.1']);
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const password = encodeURIComponent(process.env.DB_PASSWORD);
const uri = `mongodb+srv://mikat7b:${password}@cluster0.0swp6h9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//const uri =`mongodb+srv://mikat7b:<db_password>@cluster0.0swp6h9.mongodb.net/?appName=Cluster0&retryWrites=true&w=majority`.replace('<db_password>', process.env.pass);
 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // All database routes are defined here

          app.get('/rooms', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("rooms");
            const rooms = await roomsCollection.find().toArray();
            res.json(rooms);
          })
          app.post('/rooms', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("rooms");
            const result = await roomsCollection.insertOne(req.body);
            //console.log(result);
            
            res.json(result);
        });
          app.post('/pcbookinghistory', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("pcbookinghistory");
            const result = await roomsCollection.insertOne(req.body);
            //console.log(result);
            
            res.json(result);
        });
          app.get('/pcbookinghistory', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("pcbookinghistory");
            const result = await roomsCollection.find().toArray();
            //console.log(result);
            
            res.json(result);
        });
          app.post('/orderDetails', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("order details");
            const result = await roomsCollection.insertOne(req.body);
            //console.log(result);
            
            res.json(result);
        });
          app.get('/orderDetails', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("order details");
            const result = await roomsCollection.find().toArray();
            
            
            res.json(result);
        });
        app.put('/orderDetails/:id', async (req, res) => {
            const db = client.db("Snooze_Space");
            const orderCollection = db.collection("order details");
            const { id } = req.params;
            
            
            const updatedOrder = req.body;
            //console.log(updatedOrder);
            
            
            
        
            try {
                
                const result = await orderCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updatedOrder }
                );
                //console.log(result);
                
        
                if (result.modifiedCount > 0) {
                    
                    
                    res.send({ success: true, message: 'Order updated successfully' });
                } else {
                    res.status(404).send({ success: false, message: 'Order not found or no changes made' });
                }
            } catch (error) {
                
                
                console.error('Error updating order:', error);
                res.status(500).send({ success: false, message: 'Failed to update order' });
            }
        });
        
        
        app.get('/feedback', async(req, res) => {
            const db = client.db("Snooze_Space");
            const feedbackCollection = db.collection("feedback");
            const feedback = await feedbackCollection.find().toArray();
            res.json(feedback);
          })
          app.post('/feedback', async (req, res) => {
            const newFeedback = req.body;
            //console.log('creating new feedback', newFeedback);
            const db = client.db("Snooze_Space");
            const feedbackCollection = db.collection("feedback");
            const result =await feedbackCollection.insertOne(newFeedback);
            //console.log(result);
            
            res.send(result);
        });
        
        app.get('/studyRooms', async(req, res) => {
            const db = client.db("Snooze_Space");
            const studyRoomsCollection = db.collection("study room");
            const studyRooms = await studyRoomsCollection.find().toArray();
            res.json(studyRooms);
          })

          app.post('/studyRooms', async (req, res) => {
            const db = client.db("Snooze_Space");
            const roomsCollection = db.collection("study room");
            const result = await roomsCollection.insertOne(req.body);
            //console.log(result);
            
            res.json(result);
        });
        app.get('/payments', async(req, res) => {
            const db = client.db("Snooze_Space");
            const paymentsCollection = db.collection("payments");
            const payments = await paymentsCollection.find().toArray();
            res.json(payments);
          })
        app.get('/bookings', async(req, res) => {
            const db = client.db("Snooze_Space");
            const bookingsCollection = db.collection("bookingHistory");
            const bookings = await bookingsCollection.find().toArray();
            res.json(bookings);
          })

          app.post('/bookings', async (req, res) => {
            const newBooking = req.body;
            const db = client.db("Snooze_Space");
            const bookingCollection = db.collection("bookingHistory");
        
            try {
                const result = await bookingCollection.insertOne(newBooking);
                console.log('New booking added:', result);
                res.send(result);
            } catch (error) {
                console.error('Error adding booking:', error);
                res.status(500).send({ success: false, message: 'Failed to save booking' });
            }
        });
        
        // Payment History Endpoint
        app.post('/payments', async (req, res) => {
            const newPayment = req.body;
            const db = client.db("Snooze_Space");
            const paymentCollection = db.collection("payments");
        
            try {
                const result = await paymentCollection.insertOne(newPayment);
                console.log('New payment added:', result);
                res.send(result);
            } catch (error) {
                console.error('Error adding payment:', error);
                res.status(500).send({ success: false, message: 'Failed to save payment' });
            }
        });
        

        // POST: Add a new user
        app.post('/users', async (req, res) => {
            const db = client.db("Snooze_Space");
            const usersCollection = db.collection("users");
            const newUser = req.body;
            try {
                const result = await usersCollection.insertOne(newUser);
                console.log('New user added:', result);
                res.status(201).send(result);
            } catch (error) {
                console.error('Error adding user:', error);
                res.status(500).send({ success: false, message: 'Failed to add user' });
            }
        });

        // GET: Retrieve all users
        app.get('/users', async (req, res) => {
            const db = client.db("Snooze_Space");
        const usersCollection = db.collection("users");
            try {
                const users = await usersCollection.find().toArray();
                res.send(users);
            } catch (error) {
                console.error('Error retrieving users:', error);
                res.status(500).send({ success: false, message: 'Failed to retrieve users' });
            }
        });

        // GET: Retrieve a single user by ID
        app.get('/users/:uid', async (req, res) => {
            const db = client.db("Snooze_Space");
            const usersCollection = db.collection("users");
            const { uid } = req.params; // Extract `uid` from the route parameter
        
            try {
                // Query the collection using `uid`
                const user = await usersCollection.findOne({ uid: uid });
                
                if (user) {
                    res.send(user);
                } else {
                    res.status(404).send({ success: false, message: 'User not found' });
                }
            } catch (error) {
                console.error('Error retrieving user:', error);
                res.status(500).send({ success: false, message: 'Failed to retrieve user' });
            }
        });

        // PUT: Update a user by ID
        app.put('/users/:uid', async (req, res) => {
            const db = client.db("Snooze_Space");
            const usersCollection = db.collection("users");
            const { uid } = req.params;  // Use uid to find the user
            const updatedUser = req.body;  // The updated data
        
            try {
                // Use the uid instead of _id for the update query
                const result = await usersCollection.updateOne(
                    { uid: uid },  // Match by uid
                    { $set: updatedUser }  // Set the updated data
                );
        
                if (result.modifiedCount > 0) {
                    res.send({ success: true, message: 'User updated successfully' });
                } else {
                    res.status(404).send({ success: false, message: 'User not found or no changes made' });
                }
            } catch (error) {
                console.error('Error updating user:', error);
                res.status(500).send({ success: false, message: 'Failed to update user' });
            }
        });
        

        // DELETE: Remove a user by ID
        app.delete('/users/:id', async (req, res) => {
            const db = client.db("Snooze_Space");
        const usersCollection = db.collection("users");
            const { id } = req.params;
            try {
                const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
                if (result.deletedCount > 0) {
                    res.send({ success: true, message: 'User deleted successfully' });
                } else {
                    res.status(404).send({ success: false, message: 'User not found' });
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                res.status(500).send({ success: false, message: 'Failed to delete user' });
            }
        });





    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);

// Fallback routes for development (when MongoDB is not available)
app.get('/rooms', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Deluxe Room",
            description: "A comfortable deluxe room with all amenities",
            pricePerNight: 150,
            image: "/Images/Image1.jpg"
        },
        {
            id: 2,
            title: "Standard Room",
            description: "A cozy standard room perfect for studying",
            pricePerNight: 100,
            image: "/Images/Image1.png"
        }
    ]);
});

app.get('/studyRooms', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Group Study Room A",
            description: "Large study room for group collaboration",
            image: "/Images/Image1.jpg"
        },
        {
            id: 2,
            title: "Quiet Study Room B",
            description: "Peaceful individual study space",
            image: "/Images/Image1.png"
        }
    ]);
});

app.get('/', (req, res) => {
    res.send('Server is running! MongoDB connection may have failed, but basic routes are available.')
})

const server = app.listen(0, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

