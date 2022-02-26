const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        email: String!
        username: String!
    }

    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        username: String!
    }

    type Query {
        getUsers: [User]
        getUserByID(id: ID!): User
        getUserBytype(type: String!): [User]
        getBooking: [Booking]
        getBookingByID(id: ID!): Booking
        getBookingByusername(username: String!): [Booking]
        getListing: [Listing]
        getListingByID(id: ID!): Listing
        getListingByusername(username: String!): [Listing]
    }

    type Mutation {
        addUser(username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User

        addListing(listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            email: String!
            username: String!): Listing

        addBooking(listing_id: String!
            booking_id: String!
            username: String!): Booking

        
    }
`