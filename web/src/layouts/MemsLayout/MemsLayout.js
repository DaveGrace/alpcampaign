import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import scaffold from 'web/src/scaffold.css';
const MemsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.mems()} className="rw-link">
            Mems
          </Link>
        </h1>
        <Link to={routes.newMem()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Mem
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default MemsLayout
