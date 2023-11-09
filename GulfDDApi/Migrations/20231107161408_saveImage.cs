using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GulfDDApi.Migrations
{
    /// <inheritdoc />
    public partial class saveImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Articles",
                newName: "ImagePath");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Articles",
                newName: "Image");
        }
    }
}
