module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "5xl": "80px",
      },
      backgroundImage: {
        "bokeh-blue":
          "url('https://images.unsplash.com/photo-1498116288673-5e7f3710bd91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        "bokeh-purple":
          "url('https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        "user-icon":
          "url('https://www.writeups.org/wp-content/uploads/Afro-Samurai-c.jpg')",
      },
      backdropBlur: {
        custom: "10px",
      },
      minWidth: {
        "min-w-2/5": "40%",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
  plugins: [],
};
