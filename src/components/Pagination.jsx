import React, {useState, useEffect} from 'react';

const Pagination = ({counter, setPage}) => {
    const [pagMenu, setPagMenu] = useState([])

    useEffect(() => {
        getMenu(counter)
    }, [counter])

    function item(i) {
        return <button className="btn" onClick={() => setPage(i)}>{i + 1}</button>
    }

    function getMenu(counter) {
        const menu = []
        for (let i = 0; i < counter / 10; i++) {
            menu.push(item(i))
        }
        setPagMenu(menu)
    }

    return (
        <div className="pagination">
            {
                pagMenu
            }
        </div>
    );
};

export default Pagination;