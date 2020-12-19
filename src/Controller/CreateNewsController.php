<?php

namespace App\Controller;

use App\Entity\News;
use Symfony\Component\HttpFoundation\Request;

class CreateNewsController
{
  public function __invoke(Request $request): News
  {
    $imageFile = $request->files->get('imageFile');

    dd($request);

    $news = new News();

    return $news;
  }
}
