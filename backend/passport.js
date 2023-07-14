const passport = require('passport');
const User = require('./userModel');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '207891932861-pm5o9e75m77tbi7k6pans1k8jd1t82a6.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(userEmail)
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Create a new user if it doesn't exist
          user = await User.create({ googleId: profile.id, name: profile.displayName });
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize the user using user.id
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
