# UniMarket

UniMarket is a university marketplace web application that allows students to buy, sell, and trade items within their university community. Built with Next.js, Supabase, and Tailwind CSS.

## Features

- **User Authentication**: Secure login and registration system
- **Item Listings**: Users can post items for sale with descriptions, images, and prices
- **Search & Categories**: Easy navigation through different product categories
- **User Profiles**: Customizable profiles with user ratings and history
- **Admin Panel**: Comprehensive admin dashboard for user management and content moderation
- **Reporting System**: Built-in system for reporting inappropriate content or users
- **Responsive Design**: Mobile-friendly interface for seamless browsing

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/unimart.git
   cd unimart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
