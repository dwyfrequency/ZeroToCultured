```
{
  artist(id: "banksy") {
    id
    bio
    biography_blurb {
      credit
      text
      partner_id
    }
  }
}
```

```
{
  artist(id: "banksy") {
    id
    bio
    biography_blurb {
      credit
      text
      partner_id
    }
    artworks(size: 40, filter: IS_FOR_SALE) {
      id
      image_title
      imageUrl
      price
    }
  }
}
```
