using System;
using Microsoft.EntityFrameworkCore;

namespace GulfDDApi.DataAccess
{
	public class ApplicationDbContext: DbContext
	{
       public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :base(options)
		{
		}

		public DbSet<Article> Articles { get; set; } 
	}
}

