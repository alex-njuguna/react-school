=> useState - allows tracking state in a function component, state generally refers to data or properties that need to be tracking in an application

=> useState accepts an initial state and returns two values:
    - the current state
    - a function that updates the state

=> We should never directly update state e.g. 
        const [color, setColor] = useState('red')
        - This is not allowed color = 'blue
    To update a state we use the set state function e.g
        - setColor('grey')
    when the state is updated, the entire state gets overwritten