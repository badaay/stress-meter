import './app.scss';
import { useState } from 'react'
import Slider from 'react-smooth-range-input';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch("https://intense-thicket-01411.herokuapp.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      });

      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("user created successfully.");
      } else {
        setMessage("failed to create user.");
      }
    } catch (err) {
      console.log(err)
    }
  };

  let handleLevelChange = (value) => {
    setLevel(value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Please Input your Stress Level</h1>
        <label>let us know about you</label>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                type='text'
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="level">Your stress level</label>
              <Slider
                id="level"
                value={1}
                min={1}
                max={5}
                onChange={handleLevelChange}
              />
            </fieldset>
            <fieldset>
              <button
                type='submit'
              >
                Submit
              </button>
            </fieldset>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
