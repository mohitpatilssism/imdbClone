

// function User(props){
//     return(
//         <div>
//             <h1>User Component</h1>
//             <button onClick={props.data}>Call Data function</button>
//         </div>
//     )
// }

// render method in react componentDidMount

// class User extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             Email:"mohit@iteg.com"
//         }
//     }
//     componentDidMount(){
//         console.log("componentDidMount")
//     }
//     render()

//     {


//         console.log("render method",this.state.Email)
//         return(
//             <div>
//                 <h1>User Component</h1>
//                 <button onClick={()=>this.setState({Email:"patil@iteg.com"})}>Update Email</button>
//             </div>
//         )
//     }
// }
// export default User;

// shouldComponentUpdate life cycle

// class User extends React.Component{
//     constructor(){
//         super()
//         this.state={
//         count: 0
//         }
//     }

//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate")
//         return true;
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate")
//        }
//     render()

//     {
//         return(
//             <div>
//                 <h1>should Component Update {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Update counter</button>
//             </div>
//         )
//     }
// }
// export default User;

// class User extends React.Component{

//    componentWillUnmount(){
//     alert(" componentWillUnmount called")
//    }
//     render()
//     {
//         return(
//             <div className="App">
//               <h1>Student Component</h1>
//             </div>
//         )
//     }
// }
// export default User;

// function App(props) {

//     useEffect(() => {
//         alert("count is"+props.count)
//     },[props.data,props.count])

//     return (
//         <div className='App'>
//             <h1>count: {props.count}</h1>
//             <h1>Data: {props.data}</h1>

//         </div>
//     );
// }
// export default App;

function Users() {

    return (
        <div>
            <h2>Users Component</h2>
        </div>
    )

}
export default Users;

