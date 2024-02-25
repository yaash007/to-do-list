import React from 'react' 
class Additem extends React.Component {
    render() { 
        return (
            <>
            {/* Hello world */}
            <form>
              <div className="mb-3">
                <label htmlFor="inputname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  aria-describedby="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inpueprice" className="form-label">
                  price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputprice"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </>
          
        );
    }
}
 
export default Additem;