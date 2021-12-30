using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MercadoFitz.Models
{
    public class CalcularXmlModel
    {
        public List<int> Codigo = new List<int>();
        public List<string> Nome = new List<string>();
        public List<string> TipoItem = new List<string>();
        public List<string> QuantidadeCX = new List<string>();
        public List<string> ValorUnitatiro = new List<string>();
        public List<string> ValorTotal = new List<string>();
        public List<string> Porcetagem = new List<string>();
        public List<string> QuantidadeUN = new List<string>();
        public List<string> QuantidadeKG = new List<string>();
    }
}
