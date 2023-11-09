using Microsoft.AspNetCore.Mvc;

namespace GulfDDApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ArticlesController : ControllerBase
{
	private readonly ILogger<ArticlesController> _logger;
	private readonly ApplicationDbContext _context;
	private readonly IWebHostEnvironment _environment;
	public ArticlesController(ILogger<ArticlesController> logger, ApplicationDbContext context, IWebHostEnvironment environment)
	{
		_logger = logger;
		_context = context;
		_environment = environment;
	}

	[HttpGet]
	public async Task<IActionResult> Get()
	{
		var articles = await _context.Articles.ToListAsync();
		return Ok(articles);
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> GetById(int id)
	{
		var article = await _context.Articles.FindAsync(id);
		if (article == null)
		{
			return NotFound("Article not found");
		}
		return Ok(article);
	}

	[HttpPost]
	public async Task<IActionResult> Post([FromForm] Article article)
	{
		if (article == null)
		{
			return BadRequest("No Data Provided");
		}

		if (article.Image?.Length > 0)
		{
			var path = "/uploads/" + DateTimeOffset.UtcNow.ToUnixTimeSeconds() + article.Image.FileName;
			article.ImagePath = path;
			if (!Directory.Exists(_environment.WebRootPath + "/uploads"))
			{
				Directory.CreateDirectory(_environment.WebRootPath + "/uploads/");
			}
			using (FileStream filestream = System.IO.File.Create(_environment.WebRootPath + path))
			{
				article.Image.CopyTo(filestream);
				filestream.Flush();
			}
		}
		article.CreatedDate = DateTime.Now;
		article.UpdatedDate = DateTime.Now;
		await _context.Articles.AddAsync(article);
		await _context.SaveChangesAsync();
		return Ok(article);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> Put(int id, [FromBody] Article article)
	{
		var articleToUpdate = await _context.Articles.FindAsync(id);
		if (articleToUpdate == null)
		{
			return NotFound("Article not found.");
		}
		articleToUpdate.Image = article.Image;
		articleToUpdate.TitleEn = article.TitleEn;
		articleToUpdate.TitleAr = article.TitleAr;
		articleToUpdate.Active = article.Active;
		articleToUpdate.ContentEn = article.ContentEn;
		articleToUpdate.ContentAr = article.ContentAr;
		articleToUpdate.Image = article.Image;
		article.UpdatedDate = DateTime.Now;

		await _context.SaveChangesAsync();

		return Ok(article);
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Delete(int id)
	{
		var articleToDelete = await _context.Articles.FindAsync(id);
		if (articleToDelete == null)
		{
			return NotFound("Article not found.");
		}
		_context.Articles.Remove(articleToDelete);
		await _context.SaveChangesAsync();

		return Ok(articleToDelete);
	}
}

