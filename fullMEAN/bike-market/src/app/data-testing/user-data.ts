import { User } from '../user';
import { Bike } from '../bike';

export const USERS: User[] = [
    {
        _id: '1a389bj2jb1',
        first_name: 'Shannon',
        last_name: 'Steen',
        email: 'shygaldc@email.com',
        password: 'password1',
        pwconf: '',
        bikes: [
            {
                _id: 1,
                title: 'Gently used 10-speed',
                description: 'It needs normal maintenance before putting it back on the road, but it will make a great inexpensive road bike for a taller rider.',
                price: 100,
                location: 'Raleigh, NC',
                imgURL: '/assets/bike1.jpg',
                owner: '1a389bj2jb1',
            },
            {
                _id: 2,
                title: 'Road Bike for Sale',
                description: 'condition: like new make / manufacturer: SCHWINN model name / number: Multi-Use serial number: 555553298',
                price: 250,
                location: 'Denver, NC',
                imgURL: '/assets/bike2.jpg',
                owner: '1a389bj2jb1',
            },
        ]
    },
    {
        _id: 'b89b1324nlb',
        first_name: 'Faith',
        last_name: 'Benton',
        email: 'cheffaith@email.com',
        password: 'password1',
        pwconf: '',
        bikes: [
            {
                _id: 3,
                title: 'Kids Bike',
                description: '20-inch Kids Bike looks fun and is always fun to ride.',
                price: 150,
                location: 'Wilmington, NC',
                imgURL: '/assets/bike3.jpg',
                owner: 'b89b1324nlb',
            },
        ]
    }, 
]