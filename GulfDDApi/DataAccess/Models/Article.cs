using System.ComponentModel.DataAnnotations.Schema;

namespace GulfDDApi.DataAccess.Models
{
	public class Article
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public int? OrderIndex { get; set; }
		public string? TitleEn { get; set; }
		public string? TitleAr { get; set; }
		public string? ContentEn { get; set; }
		public string? ContentAr { get; set; }
		[NotMapped]
		public IFormFile? Image { get; set; }
		public string? ImagePath { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime UpdatedDate { get; set; }
		public bool Active { get; set; }
	}
}

