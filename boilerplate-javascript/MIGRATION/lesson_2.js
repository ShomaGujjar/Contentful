module.exports = function (migration) {
  //create content type
  const lesson2 = migration
    .createContentType("lesson2")
    .name("Lesson2")
    .description("")
    .displayField("title");

  //define fields
  lesson2.createField("title").name("Title").type("Symbol");

  lesson2.createField("slug").name("Slug").type("Symbol");

  lesson2.createField("body").name("Body").type("RichText");

  lesson2
    .createField("instructor")
    .name("Instructor")
    .type("Link")
    .validations([
      {
        linkContentType: ["instructor"],
      },
    ])
    .linkType("Entry");

  lesson2.createField("image").name("Image").type("Link").linkType("Asset");

  lesson2
    .createField("seo")
    .name("SEO")
    .type("Link")
    .validations([
      {
        linkContentType: ["seo"],
      },
    ])
    .linkType("Entry");

  //define appearances by calling changeEditorInterface on the contentType
  //takes field id and id of the widget
  lesson2.changeEditorInterface("slug", "slugEditor", {});
};
