describe('db queries', () => {
    it('Given the Contacts table below, write a SQL statement to get all contacts that have both email and phone values populated', () => {

        /*
        SELECT *
        FROM Contacts
        WHERE email, phone IS NOT NULL;
        */
    });

    it('Given the Users table below, write a SQL statement to get the count of users per groupId', () => {
        /*
        SELECT DISCINT COUNT(groupId)
        FROM Users;
        */
    });

    it('Given the Customers and Orders table below, write a SQL statement to get the customerName, orderId and orderDate in a single dataset', () => {
        /*
        SELECT Customers.customerName, Orders.orderId, Orders.orderDate
        FROM Customers
        INNER JOIN Orders ON Customers.id = Orders.customerId;
        */
    });


});