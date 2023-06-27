import React from 'react'

export default function DetailModal(player) {
  return (
    <div>
        <div id="demo-modal" className="modal">
    <div className="modal__content">
        <h1>CSS Only Modal</h1>

        <p>
           {player.name}
        </p>

        <div className="modal__footer">
            Made with <i className="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
        </div>

        <a href="#" className="modal__close">&times;</a>
    </div>
</div>
    </div>
  )
}
