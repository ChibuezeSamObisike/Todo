import React, {useState } from 'react';
const Form = (props) => {
    const[todoData,setTodoData]=useState("");
    const{onAdd}=props;
    return (
        <React.Fragment>
            <form onSubmit={(e)=>{e.preventDefault();
                  onAdd(todoData);
                  setTodoData("")
            }}
             className="row g-3">
                <div className="col-auto">
                    <label className="visually-hidden">Email</label>
                </div>
                <div className="col-auto">
                    <input onChange={(e)=>setTodoData(e.target.value)} type="text" className="form-control" id="inputPassword2" value={todoData} placeholder="Input next todo"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Form;