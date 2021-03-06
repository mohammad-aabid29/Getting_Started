import React from 'react'

function List() {
    return (
        <div>
            <ul class="list-group my-5">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span class="badge bg-primary rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span class="badge bg-primary rounded-pill">1</span>
                </li>
            </ul>
        </div>
    )
}

export default List