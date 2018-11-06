import React from 'react';

import Counter from './counter';

const Counters = (props) => {
    let {onReset, onDelete, onIncrement, onDecrement, counters} = props;
    console.log(`Counters-Rendered`);
    return ( 
        <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(item => <Counter key={item.id} 
                                                    counter={item}
                                                    onDelete={onDelete}
                                                    onIncrement={onIncrement}
                                                    onDecrement={onDecrement}
                                        ></Counter>)
                }
            </div> 
     );
}
 
export default Counters;