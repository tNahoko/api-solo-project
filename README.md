# CC17 Inc. Scrum Member Management API
Note: This was created during my time as a student at Code Chrysalis and part of the Immersive Bootcamp program - Week 5 API project.

This API enables you to retrieve, add, update and remove the database of CC17 Inc. that manages scrum team information.

- GET /api/scrum 
  This will retrieve an entire scrum team information.
- POST /api/scrum
  This wil add a new scrum member to the database.
  Note: Please make sure to provide name, role and level of the member. These are all required information.
- PATCH /api/scrum/:id
  This will update name, role or level of a specific scrum member.
- DELETE /api/scrum/:id
  This will remove a specific scrum member from the database.

Feel free to give us a feedback! 
