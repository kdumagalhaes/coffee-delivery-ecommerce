import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
