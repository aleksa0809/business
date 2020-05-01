import React from 'react';

export default function LeftMenu() {
  return (
        <aside className="menu is-hidden-mobile">
            <p className="menu-label">
             Our products
            </p>
            <ul className="menu-list">
                <li>Casual lingerie</li>
                <li>
                    <ul>
                      <li><a href="#/showcase/casual/regular">regular sizes</a></li>
                      <li><a href="#/showcase/casual/large">large sizes</a></li>
                    </ul>
                </li>
                <li>Luxary lingerie</li>
                <li>
                    <ul>
                      <li><a href="#/showcase/lux/regular">regular sizes</a></li>
                      <li><a href="#/showcase/lux/large">large sizes</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
  );
}

