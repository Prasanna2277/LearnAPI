import React, {useState ,useEffect} from 'react';
import axios from 'axios';

function Item(){
    const [items ,setItems] = useState([])

    useEffect(()=> {
        const fetchitems = async() => {
            const token =  localStorage.getItem('access_token')
            try{
                const res= await axios.get('http://localhost:8000/api/items/', {headers : {Authorization : `Bearer ${token}`, },});
                setItems(res.data);

            }
            catch(error){
                console.error('Fetch Failed!');

            }

        };
        fetchitems();
    },[]);
    return (
        <div className="container mt-4">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-muted">No items available or you are not authenticated.</p>
          )}
        </div>
      </div>
    );

}
export default Item;