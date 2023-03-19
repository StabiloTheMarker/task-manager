**Entities**

- User:

  - id: long
  - email: str required
  - password: str required
  - firstName: str required
  - lastName: str

- Task:
  - id: long required
  - name: str required
  - description: str
  - status: STATUS required
  - createdBy: User required
  - updatedAt: timestamp required
  - createdAt: timestamp required
  - children: [Task] not null but can be empty array
  - parent: Task can be null
