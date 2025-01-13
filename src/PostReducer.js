let nextId = 2;
export const postsReducer = (state, action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, { id: nextId++, title: action.title, likes: 0 }]

        case 'delete':
            return state.filter((p) => p.id !== action.id);

        case "like":
            return state.map((p) =>
                p.id === action.id
                    ? { ...p, likes: p.likes + 1 } // Create a new post object with updated likes
                    : p
            );
        default:
            state;
    }
}