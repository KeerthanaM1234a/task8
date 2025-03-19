// import {outlet,Link} from "react-router-dom";
// const Layout=()=>{
//     return(
//         <div>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/">Contact</Link></li>

//                 </ul>
//             </nav>
//             <outlet/>
//         </div>
//     )
// }


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<Index />} />
        {/* <Route path="/furnitures" element={<Furnitures />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;