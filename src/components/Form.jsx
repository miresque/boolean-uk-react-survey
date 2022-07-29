import React, { useState } from 'react'

function Form(props) {
  const { answers, setAnswers } = props
  const initFormState = {
    rating: "",
    timeSpentBy: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false
    },
    review: "",
    username: "",
    email: ""
  }
  const [form, setForm] = useState(initFormState)

  const handleUserData = (event) => {
    const inputType = event.target.type
    const inputName = event.target.name
    const inputValue = event.target.value

    let newUserData = {...form, [inputName]: inputValue}
    if (inputType === 'checkbox') {
      newUserData = {...form, timeSpentBy: {...form.timeSpentBy, [inputValue]: event.target.checked}}
    }
    setForm(newUserData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('done')
    setAnswers([...answers, form])
    setForm(initFormState)
  }

  return (
    <>
    <button onClick={() => console.log(form)}>TEST</button>    
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
                <li>
                    <input onChange={handleUserData} id="color-one" type="radio" name="rating" value="1" checked={form.rating === '1'} />
                    <label htmlFor="color-one">
                        1
                    </label>
                </li>
                <li>
                    <input onChange={handleUserData} id="color-two" type="radio" name="rating" value="2" checked={form.rating === '2'} />
                    <label htmlFor="color-two">
                        2
                    </label>
                </li>
                <li>
                    <input onChange={handleUserData} id="color-three" type="radio" name="rating" value="3" checked={form.rating === '3'} />
                    <label htmlFor="color-three">
                        3
                    </label>
                </li>
                <li>
                    <input onChange={handleUserData} id="color-four" type="radio" name="rating" value="4" checked={form.rating === '4'}/>
                    <label htmlFor="color-four">
                        4
                    </label>
                </li>
            </ul>
        </div>
        
        <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
            <li>
                <label>
                    <input onChange={handleUserData} name="spend-time" type="checkbox" value="swimming" checked={form.timeSpentBy.swimming}/>
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleUserData} name="spend-time" type="checkbox" value="bathing" checked={form.timeSpentBy.bathing}/>
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleUserData} name="spend-time" type="checkbox" value="chatting" checked={form.timeSpentBy.chatting}/>
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleUserData} name="spend-time" type="checkbox" value="noTime" checked={form.timeSpentBy.noTime}/>
                    I don't like to spend time with it
                </label>
            </li>
        </ul>
        </div>
        
        <label>
            What else have you got to say about your rubber duck?
        <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleUserData}
            value={form.review}
        ></textarea>
        </label>
        
        <label>
        Put your name here if you feel like it:
        <input onChange={handleUserData}
            type="text"
            name="username"
            value={form.username}
        />
        </label>
        
        <label>
        Leave us your email pretty please??
        <input onChange={handleUserData}
            type="email"
            name="email"
            value={form.email} 
        />
        </label>

        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
    </>
  )
}

export default Form