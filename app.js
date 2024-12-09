
const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child1' },
            [React.createElement('h1', { id: 'h1' }, 'I am a h1 tag'), React.createElement('h2', { id: 'h2' }, 'I am a h2 tag')]),
        React.createElement('div', { id: 'child2' },
            [React.createElement('h1', { id: 'h3' }, 'I am a h1 tag'), React.createElement('h2', { id: 'h4' }, 'I am a h2 tag')])
    ]
)



console.log(parent)


const heading = React.createElement('h1', {id:'heading'}, 'Hello World from React!');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);