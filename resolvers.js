const User = require('./model/userSchema');
const Listing = require('./model/listingSchema')
const Booking = require('./model/bookingSchema')

exports.resolvers = {
    Query: {
        getUsers: async (parent, args) => {
            return User.find({})
        },
        getUserByID: async (parent, args) => {
            return User.findById(args.id)
        },
        getUserBytype: async (parent, args) => {
            return User.find({ "type": args.type })
        },

        getListing: async (parent, args) => {
            return Listing.find({})
        },
        getListingByID: async (parent, args) => {
            return Listing.findById(args.id)
        },
        getListingByusername: async (parent, args) => {
            return Listing.find({ "username": args.username })
        },

        getBooking: async (parent, args) => {
            return Booking.find({})
        },
        getBookingByID: async (parent, args) => {
            return Booking.findById(args.id)
        },
        getBookingByusername: async (parent, args) => {
            return Booking.find({ "username": args.username })
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)

            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type,

            })

            return newUser.save()
        },
       
        addListing: async (parent, args) => {
            console.log(args)

            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,

            })

            return newListing.save()
        },
        addBooking: async (parent, args) => {
            console.log(args)

            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username,

            })

            return newBooking.save()
        },
    }
}