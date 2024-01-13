A bug tracker application to demostrate redux

step 1: design the application

    {
        bug: [
            {
                id: 1,
                description: "",
                resolved: false
            }
        ],
        currentUser: {}
    }


step 2: Defining the actions

    - Add a bug
    {
        type: "bugAdded",
        payload: {
            description: "..."
        }
    }

    - Delete a bug
    {
        type: "bugRemoved,
        payload: {
            id: 1
        }
    }

    - Mark a bug as resolved

step 3: Create a reducer

step 4: Set up the store
