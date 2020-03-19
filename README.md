# Perrenial Portal Project API

## Database Schemas

### Caregiver

```
const careGiverSchema = mongoose.Schema (
    {
        name: { type: String, required: true },
        location: { type: String, required: false },
        email: { type: String, required: false },
        phone: { type: String, required: false },
        webSite: String,
        contact: {
            firstName: String,
            lastName: String,
        },
        description: { type: String, required: true },
        takingNewClients: { type: Boolean, default: false },
        services: Array,
        rating: { type: Number, max: 5 },
        reviews : [ Review.schema ]
    },
    { timestamps: true }
)
```

### Review

```
const reviewSchema = new mongoose.Schema (
    {
        text: String,
        postedBy: String,
        rating: { type: Number, max: 5 }
    }
)
```
