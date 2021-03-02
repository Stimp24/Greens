const mongoose = require('mongoose')
//Schema
const postSchema = mongoose.Schema({
      id: number,
      links: {
            pictures: String
      },
      fullAddress: {
            streetNumber: Number,
            streetName: String,
            city: String,
            state: String,
            zipCode: Number,
            latitude: Number,
            longitude: Number
      },
      price: Number,
      saleType: String,
      beds: Number,
      baths: Number,
      sqft: Number,
      description: String,
      halfBath: Number,
      homeType: String,
      lotSize: Number,
      views: Number,
      year: Number,
      createdAt: {
            type: Date,
            default: new Date()
      }

})

const postListing = mongoose.model('postListing', postSchema)

module.export = postListing