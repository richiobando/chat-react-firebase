import SignOut from '../SignOut'
import s from './Navbar.module.css'

export default function Navbar (props) {
  // const { signOut, user, userRoles } = props
  const { auth } = props
  return (
    <nav className={s.container}>
      <div className={s.buttonsContainer}>
        <div className={s.button}>{/* <button>New Channel</button> */}</div>
        <div className={s.button}>
          <SignOut auth={auth} />
        </div>

        <ul className='channel-list'>
          {/* <li>User1</li>
          <li>User2</li>
          <li>User3</li> */}
        </ul>
      </div>
    </nav>
  )
}

// function SidebarItem (props) {
//   const { channel, key, isActiveChannel, user, userRoles } = props

//   return (
//     <>
//       <li>
//         <a
//           href={`/channels/${channel.id}`}
//           className={isActiveChannel ? 'isActive' : ''}
//         >
//           {channel.slug}
//         </a>
//       </li>
//     </>
//   )
// }

// <main className='main flex h-screen w-screen overflow-hidden'>
//   {/* Sidebar */}
//   <nav
//     className='w-64 bg-gray-900 text-gray-100 overflow-scroll '
//     style={{ maxWidth: '20%', minWidth: 150, maxHeight: '100vh' }}
//   >
//     <div className='p-2 '>
//       <div className='p-2'>
//         <button
//           className='bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded w-full transition duration-150'
//           onClick={() => newChannel()}
//         >
//           New Channel
//         </button>
//       </div>
//       <hr className='m-2' />
//       <div className='p-2 flex flex-col space-y-2'>
//         <h6 className='text-xs'>{user?.email}</h6>
//         <button
//           className='bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded w-full transition duration-150'
//           onClick={() => signOut()}
//         >
//           Log out
//         </button>
//       </div>
//       <hr className='m-2' />
//       <h4 className='font-bold'>Channels</h4>
//       <ul className='channel-list'>
//         {Array.from({ length: 5 })
//           .fill(null)
//           .map((x) => (
//             <SidebarItem
//               channel={x}
//               key={x.id}
//               isActiveChannel={x.id === props.activeChannelId}
//               user={user}
//               userRoles={userRoles}
//             />
//           ))}
//       </ul>
//     </div>
//   </nav>

//   {/* Messages */}
//   <div className='flex-1 bg-gray-800 h-screen'>{props.children}</div>
// </main>;
