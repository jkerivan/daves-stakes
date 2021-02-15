import ReactTerminal from 'terminal-in-react';

const Terminal = (props)=> {

    const onClose = (event) => {
        props.onClose();
    }

  return (
    <div className="terminal-container">
        <ReactTerminal
            color='green'
            allowTabs={false}
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: 'Hello World',
            popup: () => alert('Terminal in React')
            }}
            descriptions={{
                'open-google': 'opens google.com',
                showmsg: 'shows a message',
            }}
            actionHandlers={{
                handleClose: (toggleClose) => {
                  onClose();
                },
                handleMaximise: (toggleMaximise) => {
                  // do something on maximise
                  toggleMaximise();
                }
              }}
            msg='Welcome to Daves Stake Pool.  Type help to get started.'
        />
    </div>
  );
}

export default Terminal;
