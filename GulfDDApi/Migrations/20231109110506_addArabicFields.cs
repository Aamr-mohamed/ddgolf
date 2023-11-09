using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GulfDDApi.Migrations
{
    /// <inheritdoc />
    public partial class addArabicFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Articles",
                newName: "TitleEn");

            migrationBuilder.RenameColumn(
                name: "Content",
                table: "Articles",
                newName: "TitleAr");

            migrationBuilder.AddColumn<string>(
                name: "ContentAr",
                table: "Articles",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ContentEn",
                table: "Articles",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContentAr",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "ContentEn",
                table: "Articles");

            migrationBuilder.RenameColumn(
                name: "TitleEn",
                table: "Articles",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "TitleAr",
                table: "Articles",
                newName: "Content");
        }
    }
}
