import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    step: 0,
    counters: [0],
    truty: false,
    users: [
      {
        first_name: "John",
        last_name: "Smith",
        age: 45,
        dept_number: 100,
        city: "Chicago",
        state: "IL",
        salary: 1000
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        age: 25,
        dept_number: 100,
        city: "Phoenix",
        state: "AZ",
        salary: 5000
      },
      {
        first_name: "Mary",
        last_name: "Smith",
        age: 40,
        dept_number: 200,
        city: "Chicago",
        state: "IL",
        salary: 2500
      },
      {
        first_name: "George",
        last_name: "Edwards",
        age: 12,
        dept_number: 300,
        city: "Phoenix",
        state: "AZ",
        salary: 3000
      },
    ]
  }
  changeStep = (type) => {
    const { count, step } = this.state
    if (type == "+") {
      this.setState({
        step: step + count
      })
    } else {
      this.setState({
        step: step - count
      })
    }
  }
  changeCount = (type) => {
    const { count } = this.state
    if (type == "+") {
      this.setState({
        count: count + 1
      })
    } else {
      this.setState({
        count: count - 1
      })
    }
  }
  addCount = () => {
    const { counters } = this.state
    counters.push(0)
    this.setState({
      counters: counters
    })
  }
  increasCount = (i) => {
    const { counters } = this.state
    counters[i] += 1
    this.setState({
      counters: counters
    })
  }
  dicresCount = (i) => {
    const { counters } = this.state
    counters[i] -= 1
    this.setState({
      counters: counters
    })
  }
  toggleBtn = () => {
    const { truty } = this.state
    this.setState({
      truty: !truty
    })
  }
  filterUsers = () => {
    const { users } = this.state
    this.setState({
      users: users.filter(item => item.age > 18)
    })
  }
  render() {
    const { count, step, counters, truty, users } = this.state
    return (
      <div className='flex flex-col gap-48'>
        <div className='flex mt-2 ml-4 w-[250px] h-24 flex-col gap-8'>
          <h1 className='text-5xl'>Task-1</h1>
          <div>
            <h2 className='text-4xl flex'>Step count: {step}</h2>
            <div className='flex justify-center gap-4 mt-3'>
              <button onClick={() => this.changeStep("+")} className='text-3xl w-10 h-10 flex justify-center items-center text-white bg-blue-600'>+</button>
              <button onClick={() => this.changeStep("-")} className='text-3xl w-10 h-10 flex justify-center items-center text-white bg-orange-600'>-</button>
            </div>
          </div>
          <div className='flex items-center justify-center border-b-2 border-black pb-3 gap-2'>
            <button onClick={() => this.changeCount("+")} className='text-3xl w-10 h-10 flex justify-center items-center text-white bg-green-600'>+</button>
            <p className='text-2xl'>{count}</p>
            <button onClick={() => this.changeCount("-")} className='text-3xl w-10 h-10 flex justify-center items-center text-white bg-red-600'>-</button>
          </div>
        </div>
        <div className='flex mt-2 ml-4 w-[250px] h-24 flex-col gap-8' >
          <h1 className='text-5xl'>Task-2</h1>
          <button onClick={this.addCount} className='bg-blue-600 text-xl py-1 text-white'>Add Btn</button>
          <div className='flex flex-col gap-1 border-b-2 pb-3 border-black'>
            {
              counters.map((item, i) => {
                return <div className='flex items-center gap-3' key={i}>
                  <button onClick={() => this.increasCount(i)} className='text-2xl w-10 h-10 flex justify-center items-center bg-blue-700 text-white '>+</button>
                  <p className='text-2xl'>{counters[i]}</p>
                  <button onClick={() => this.dicresCount(i)} className='text-2xl w-10 h-10 flex justify-center items-center bg-orange-600 text-white '>-</button>
                </div>
              })
            }
          </div>
        </div>
        <div className='flex ml-4 w-[250px] h-24 flex-col gap-8'>
          <h1 className='text-5xl'>Task-3</h1>
          <h3 className='text-2xl'>
            {
              truty ? "Welcome" : "Login"
            }
          </h3>
          <button className='border px-3 bg-gray-200' onClick={() => this.toggleBtn()}>
            {
              truty ? "Logout" : "Login"
            }
          </button>
        </div>
        <div className='w-[85%] m-auto'>
          <button onClick={this.filterUsers} className='botder bg-gray-100 mb-5 px-4 py-1 text-xl border-black'>Armiyaga qabul qilish</button>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='border'>ID</th>
                <th className='border'>FirstName</th>
                <th className='border'>LastName</th>
                <th className='border'>Age</th>
                <th className='border'>DeptNumber</th>
                <th className='border'>City</th>
                <th className='border'>State</th>
                <th className='border'>Salary</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, i) => {
                  return <tr key={i}>
                    <td className='border text-center'>{i + 1}</td>
                    <td className='border text-center'>{item.first_name}</td>
                    <td className='border text-center'>{item.first_name}</td>
                    <td className='border text-center'>{item.age}</td>
                    <td className='border text-center'>{item.dept_number}</td>
                    <td className='border text-center'>{item.city}</td>
                    <td className='border text-center'>{item.state}</td>
                    <td className='border text-center'>{item.salary}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
