import React from 'react'
import Profile from '../../entities/Profile/ui/Profile'
import RecentPosts from '../../entities/RecentPosts/ui/RecentPosts'
import FeaturedWorks from '../../entities/FeaturedWorks/ui/FeaturedWorks'

const ContactPage = () => {
  return (
    <main>
      <Profile />
      <RecentPosts />
      <FeaturedWorks />
    </main>
  )
}

export default ContactPage
