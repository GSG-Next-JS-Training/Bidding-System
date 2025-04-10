interface User{
    fullname:string
    email:string
    address:string
    birthdate:string
    phone:string
    role:string
}

const TABLE_HEADER: string[] = ["Name", "Email", "Address", "Phone", "Role"];

const USERS_DATA: User[] = [
    {
        fullname: "Jones Doe",
        email: "jones.doe@example.com",
        address: "123 Main St",
        birthdate: "1990-01-01",
        phone: "123-456-7890",
        role: "Bidding company"
    },
    {
        fullname: "Emily Smith",
        email: "emily.smith@example.com",
        address: "456 Oak Ave",
        birthdate: "1985-05-15",
        phone: "234-567-8901",
        role: "Client"
    },
    {
        fullname: "Michael Brown",
        email: "michael.brown@example.com",
        address: "789 Pine Rd",
        birthdate: "1992-09-23",
        phone: "345-678-9012",
        role: "Supplier"
    },
    {
        fullname: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        address: "321 Maple St",
        birthdate: "1988-11-12",
        phone: "456-789-0123",
        role: "Bidding company"
    },
    {
        fullname: "David Lee",
        email: "david.lee@example.com",
        address: "654 Cedar Blvd",
        birthdate: "1991-04-30",
        phone: "567-890-1234",
        role: "Client"
    },
    {
        fullname: "Laura Martinez",
        email: "laura.martinez@example.com",
        address: "987 Birch Ln",
        birthdate: "1987-07-19",
        phone: "678-901-2345",
        role: "Supplier"
    },
    {
        fullname: "Chris Wilson",
        email: "chris.wilson@example.com",
        address: "111 Elm St",
        birthdate: "1993-02-08",
        phone: "789-012-3456",
        role: "Bidding company"
    },
    {
        fullname: "Anna Davis",
        email: "anna.davis@example.com",
        address: "222 Walnut Dr",
        birthdate: "1995-06-27",
        phone: "890-123-4567",
        role: "Client"
    },
    {
        fullname: "Brian Clark",
        email: "brian.clark@example.com",
        address: "333 Spruce Ct",
        birthdate: "1989-03-14",
        phone: "901-234-5678",
        role: "Supplier"
    },
    {
        fullname: "Olivia Lewis",
        email: "olivia.lewis@example.com",
        address: "444 Chestnut Pl",
        birthdate: "1994-12-03",
        phone: "012-345-6789",
        role: "Bidding company"
    }
];


export {
    TABLE_HEADER,
    USERS_DATA
}
